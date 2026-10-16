public with sharing class DataTableService {
    
    @AuraEnabled
    public static List<Account> accountList(){
        return [SELECT Id, Name, Type, Phone, AnnualRevenue, CreatedDate, Active__c, Website, OwnerId, Owner.Name FROM Account LIMIT 10];
    }
}