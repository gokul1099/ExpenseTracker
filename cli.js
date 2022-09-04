const program = require('commander');
var colors = require('colors');
const exec = require('child_process').exec;
var fs = require('fs');
var doT = require('dot');
var config = require('./cli-config.json');
const { INDEX, LAYOUT } = require("./templates")
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function writeToFile(file, tpl) {
    fs.writeFile(file, tpl, function (err) {
        if (err) throw err;
        fs.chmodSync(file, 0777);
        console.log(colors.green("New file is created successfully in this path ->" + file));
    });
}
function compileTemplate(tpl, data) {
    doT.templateSettings = {
        evaluate: /\{\{([\s\S]+?)\}\}/g,
        interpolate: /\{\{=([\s\S]+?)\}\}/g,
        encode: /\{\{!([\s\S]+?)\}\}/g,
        use: /\{\{#([\s\S]+?)\}\}/g,
        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
        conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
        iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
        varname: 'it',
        strip: false,
        append: true,
        selfcontained: false
    };
    var tempFn = doT.template(tpl);
    return tempFn(data);
}

program
    .version('0.0.1')
    .description('React native Framework CLI');


program
    .command("generate [name]")
    .alias('g')
    .description('generate screens')
    .action(function (env, options) {

        if (!env) {
            console.log(colors.red("Please give screen name"));
            process.exit();
        }
        // screenName = capitalizeFirstLetter(env);
        screenName = env
        screendir = "./App/screens/";
        dir = screendir + screenName;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (fs.existsSync(dir)) {
            indexFile = screendir + screenName + "/index.tsx";
            if (!fs.existsSync(indexFile)) {
                tplText = INDEX
                tpl = compileTemplate(tplText, {});
                writeToFile(indexFile, tpl)
            }
            layoutFIle = screendir + screenName + "/Layout.tsx"
            if (!fs.existsSync(layoutFIle)) {
                tplText = LAYOUT(screenName)
                tpl = compileTemplate(tplText, {})
                writeToFile(layoutFIle, tpl)
            }

        }

    })
// error on unknown commands
program.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
});

program.parse(process.argv);

if (!program.args.length) program.help();
