const cartPage = {
    pageTitle: '.page-title',
    imageTableCell: '.text-center > a > .img-thumbnail',
    productNameTableCell: 'form > .table-responsive > .table > tbody > tr > :nth-child(2)',
    modelTableCell: 'form > .table-responsive > .table > tbody > tr > :nth-child(3)',
    quantityTableCell: 'form > .table-responsive > .table > tbody > tr > :nth-child(4)',
    uniteTableCell: 'tbody > tr > :nth-child(5)',
    totalTableCell: 'tbody > tr > :nth-child(6)',
    quantityInputField: ':nth-child(4) > .input-group > .form-control',
    updateCartButton: ':nth-child(4) > .input-group > .input-group-append > .btn-primary',
    removeFromCartButton: '.btn-danger',
    subTotalPriceTableCell: '.col-md-4 > .table > tbody > :nth-child(1) > :nth-child(2)',
    //ecoTaxPriceTableCell: '.col-md-4 > .table > tbody > :nth-child(2) > :nth-child(2)',
   // vatPriceTableCell: '.col-md-4 > .table > tbody > :nth-child(3) > :nth-child(2)',
    totalPriceTableCell: '.col-md-4 > .table > tbody > :nth-child(2) > :nth-child(2)',
    continueShoppingButton: '.buttons.d-flex > .btn-secondary',
    checkoutButton: '.buttons.d-flex > .btn-primary',
    emptyCartContinueButton: '.buttons > .btn'
}
export { cartPage }