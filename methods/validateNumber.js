function validate(message) {
    let content = message.content || '';
    if (!message || !message.type || message.type !== "text") {
        return null;
    }
    var regex = /[0-9]{1,4}/gi;

    if(content.match(regex)){
        if(content.match(regex).length > 1){
            return null;
        }else{
            return content.match(regex)[0];
        }
    }

    // var motor = ctx.context.km;
    //     var mobil = ctx.context.km;

    //     if (mobil != 0){
    //         var hasil_mobil = 0.21 * mobil;
    //         var hasil = hasil_mobil;
    //     }else if (motor != 0){
    //         var hasil_motor = 0.075 * motor;
    //         var hasil = hasil_motor;
    //     }else{
    //         hasil = 0;
    //     }

    //     ctx.context.hasil = hasil;

    return null;
}