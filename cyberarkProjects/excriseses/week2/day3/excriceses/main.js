

$('.generator').click(function () {
    const id={cmp_i:$(this).closest('.computer').attr("data-id")}
    console.log("Computer’s data-id:" + " "+ id.cmp_i)
    console.log("Processor: "+" "+$(this).closest('div .processor').attr('id'))
    console.log("BUS:"+" "+$(this).closest('.computer').find('.BUS').text())
})




$('.validator').click(function () {
    console.log("The generator’s text:"+" "+$(this).closest('.computer').find('.generator').text())
    console.log("The MB:"+" "+$(this).closest('.computer').find('.MB').text())
    console.log("Both QRs:"+" "+$(this).closest('.computer').find('.QR').text())
})