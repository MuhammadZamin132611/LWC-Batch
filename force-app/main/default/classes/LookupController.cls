// public with sharing class LookupController {
    
    //     @AuraEnabled
    //     public static List<sObject> accountList(String searchKeyWord, String objectApiName, String fieldToSearch){
        //         String likeParam = '%'+searchKeyWord+'%';
        //         String queryString = 'SELECT Id, '+fieldToSearch+' FROM ' + objectApiName+' WHERE '+fieldToSearch+' Like: likeParam';
        //         return Database.query(queryString);
    //     }
// }

public with sharing class LookupController {
    
    @AuraEnabled
    public static List<sObject> accountList(String searchKeyWord, String objectApiName, String fieldToSearch) {
        if (String.isBlank(searchKeyWord) || String.isBlank(objectApiName) || String.isBlank(fieldToSearch)) {
            return new List<sObject>();
        }
        
        
        String cleanObject = String.escapeSingleQuotes(objectApiName.trim());
        String cleanField = String.escapeSingleQuotes(fieldToSearch.trim());
        String likeParam = '%' + String.escapeSingleQuotes(searchKeyWord.trim()) + '%';
        
        
        String queryString = 'SELECT Id, ' + cleanField +
            ' FROM ' + cleanObject +
            ' WHERE ' + cleanField + ' LIKE :likeParam LIMIT 50';
        
        return Database.query(queryString);
    }
}