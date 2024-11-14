exports.ROLES = {
  Admin: 'ROLE ADMIN',
  Member: 'ROLE MEMBER',
  Merchant: 'ROLE MERCHANT'
};

exports.MERCHANT_STATUS = {
  Rejected: 'Rejected',
  Approved: 'Approved',
  Waiting_Approval: 'Waiting Approval'
};

exports.CART_ITEM_STATUS = {
  Processing: 'Processing',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled',
  Not_processed: 'Not processed'
};

exports.REVIEW_STATUS = {
  Rejected: 'Rejected',
  Approved: 'Approved',
  Waiting_Approval: 'Waiting Approval'
};

exports.EMAIL_PROVIDER = {
  Email: 'Email',
  Google: 'Google',
  Facebook: 'Facebook'
};

exports.PAYMENT_STATUS = {
  Pending: 'Pending',
  Completed: 'Completed',
  Failed: 'Failed'
};

exports.PAYMENT_METHOD = {
  Cash: 'Cash',
  Bank_Transfer: 'Bank Transfer',
  Credit_Card: 'Credit Card'
};

exports.JWT_COOKIE = 'x-jwt-cookie';
