public with sharing class ExceptionUtil {
  @AuraEnabled
  public static void throwException() {
    try {
      Account acc = new Account();
      insert acc;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
