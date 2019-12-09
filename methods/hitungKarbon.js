
function hitung(ctx){

    if(ctx.context.transport2 == true){
        let kmMotor = ctx.context.kmmotor;
        let kmMobil = ctx.context.kmmobil;
        // Rumus transport
        var hasil_mobil = 0.21 * kmMobil;
        var hasil_motor = 0.075 * kmMotor;
        let familyMember = ctx.context.familyMember;
        let kipasAngin = ctx.context.kipas;
        var ac = 0;
        if(kipasAngin == true){
            kipasAngin = 0.003159 * familyMember;
            ac = 2.87 * familyMember;
        }else{
            kipasAngin = 0;
            ac = 0;
        }
        let tv = ctx.context.tv;
        if(tv == true){
            tv = 0.001273 * familyMember;
        }else{
            tv = 0;
        }
        let lpg = ctx.context.lpg;
        var hasil_lpg = 0.84 * lpg;
        let air = ctx.context.air;
        if(air == true){
            air = 0.8 * ctx.context.botolAir;
        }else{
            air = 0;
        }
        ctx.context.totalKarbon = hasil_mobil + hasil_motor + kipasAngin + ac + tv + hasil_lpg + air;
        var karbonPerYear = ctx.context.totalKarbon * 365 / 1000;
        ctx.context.karbonPerYear = Math.round(karbonPerYear);
        var cassia = ctx.context.karbonPerYear / 5.2;
        ctx.context.cassia = Math.round(cassia);
        if (ctx.context.cassia == 0){
            ctx.context.cassia = 1;
        }
        var kenanga = ctx.context.karbonPerYear / 0.75;
        ctx.context.kenanga = Math.round(kenanga);
        if (ctx.context.kenanga == 0){
            ctx.context.kenanga = 1;
        }
        var bungur = ctx.context.karbonPerYear / 0.16;
        ctx.context.bungur = Math.round(bungur);
        if (ctx.context.bungur == 0){
            ctx.context.bungur = 1;
        }
        var jenisPohon = Math.floor(Math.random() * 3) + 1;
        ctx.context.jenisPohon = jenisPohon;
        return ctx;
    }
    else if(ctx.context.transport == 'Motor'){
        let kmone = ctx.context.kmone;
        // Rumus transport
        var hasil_motor = 0.075 * kmone;
        let familyMember = ctx.context.familyMember;
        let kipasAngin = ctx.context.kipas;
        var ac = 0;
        if(kipasAngin == true){
            kipasAngin = 0.003159 * familyMember;
            ac = 2.87 * familyMember;
        }else{
            kipasAngin = 0;
            ac = 0;
        }
        let tv = ctx.context.tv;
        if(tv == true){
            tv = 0.001273 * familyMember;
        }else{
            tv = 0;
        }
        let lpg = ctx.context.lpg;
        var hasil_lpg = 0.84 * lpg;
        let air = ctx.context.air;
        if(air == true){
            air = 0.8 * ctx.context.botolAir;
        }else{
            air = 0;
        }
        ctx.context.totalKarbon = hasil_motor + kipasAngin + ac + tv + hasil_lpg + air;
        var karbonPerYear = ctx.context.totalKarbon * 365 / 1000;
        ctx.context.karbonPerYear = Math.round(karbonPerYear);
        var cassia = ctx.context.karbonPerYear / 5.2;
        ctx.context.cassia = Math.round(cassia);
        if (ctx.context.cassia == 0){
            ctx.context.cassia = 1;
        }
        var kenanga = ctx.context.karbonPerYear / 0.75;
        ctx.context.kenanga = Math.round(kenanga);
        if (ctx.context.kenanga == 0){
            ctx.context.kenanga = 1;
        }
        var bungur = ctx.context.karbonPerYear / 0.16;
        ctx.context.bungur = Math.round(bungur);
        if (ctx.context.bungur == 0){
            ctx.context.bungur = 1;
        }
        var jenisPohon = Math.floor(Math.random() * 3) + 1;
        ctx.context.jenisPohon = jenisPohon;
        return ctx;
    }
    else if(ctx.context.transport == 'Mobil'){
        let kmone = ctx.context.kmone;
        // Rumus transport
        var hasil_mobil = 0.21 * kmone;
        let familyMember = ctx.context.familyMember;
        let kipasAngin = ctx.context.kipas;
        var ac = 0;
        if(kipasAngin == true){
            kipasAngin = 0.003159 * familyMember;
            ac = 2.87 * familyMember;
        }else{
            kipasAngin = 0;
            ac = 0;
        }
        let tv = ctx.context.tv;
        if(tv == true){
            tv = 0.001273 * familyMember;
        }else{
            tv = 0;
        }
        let lpg = ctx.context.lpg;
        var hasil_lpg = 0.84 * lpg;
        let air = ctx.context.air;
        if(air == true){
            air = 0.8 * ctx.context.botolAir;
        }else{
            air = 0;
        }
        ctx.context.totalKarbon = hasil_mobil + kipasAngin + ac + tv + hasil_lpg + air;
        var karbonPerYear = ctx.context.totalKarbon * 365 / 1000;
        ctx.context.karbonPerYear = Math.round(karbonPerYear);
        var cassia = ctx.context.karbonPerYear / 5.2;
        ctx.context.cassia = Math.round(cassia);
        if (ctx.context.cassia == 0){
            ctx.context.cassia = 1;
        }
        var kenanga = ctx.context.karbonPerYear / 0.75;
        ctx.context.kenanga = Math.round(kenanga);
        if (ctx.context.kenanga == 0){
            ctx.context.kenanga = 1;
        }
        var bungur = ctx.context.karbonPerYear / 0.16;
        ctx.context.bungur = Math.round(bungur);
        if (ctx.context.bungur == 0){
            ctx.context.bungur = 1;
        }
        var jenisPohon = Math.floor(Math.random() * 3) + 1;
        ctx.context.jenisPohon = jenisPohon;
        return ctx;
    }
    return ctx;
}