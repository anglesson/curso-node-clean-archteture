import { AccountModel, AddAccountModel } from '../db-add-account-protocols'

export interface AddAccountRepository {
  add (account: AddAccountModel): Promise<AccountModel>
}
