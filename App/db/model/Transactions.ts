import { Model } from "@nozbe/watermelondb";
import {text,date,readonly} from "@nozbe/watermelondb/decorators"


export default class Transactions extends Model{
    static table = "transactions"
    @text('type') type
    @text("title") title
    @text("amount") amount
    @readonly @date('created_at') createdAt
  @readonly @date('updated_at') updatedAt
}