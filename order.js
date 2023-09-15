class Order {
  constructor(
    id,
    nToProductCode,
    sClientId,
    sGroupId,
    nAmount,
    sTxnRefNo,
    dtModifiedDate,
    sEnteredBy,
    sStatus,
    sCancelledBy,
    dtCancelledDateTime,
    bAutoAllocation,
    nImpactedProduct,
    bIncludeInDeposit,
    bODINUser,
    nProductFlag,
    sManagerVersion,
    sBankId,
    sBankAccountNo
  ) {
    this.id = id;
    this.nToProductCode = nToProductCode;
    this.sClientId = sClientId;
    this.sGroupId = sGroupId;
    this.nAmount = nAmount;
    this.sTxnRefNo = sTxnRefNo;
    this.dtModifiedDate = dtModifiedDate;
    this.sEnteredBy = sEnteredBy;
    this.sStatus = sStatus;
    this.sCancelledBy = sCancelledBy;
    this.dtCancelledDateTime = dtCancelledDateTime;
    this.bAutoAllocation = bAutoAllocation;
    this.nImpactedProduct = nImpactedProduct;
    this.bIncludeInDeposit = bIncludeInDeposit;
    this.bODINUser = bODINUser;
    this.nProductFlag = nProductFlag;
    this.sManagerVersion = sManagerVersion;
    this.sBankId = sBankId;
    this.sBankAccountNo = sBankAccountNo;
  }
}
module.exports = Order;
