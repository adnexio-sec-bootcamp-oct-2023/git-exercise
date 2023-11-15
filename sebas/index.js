function convert_myr_to_twd(myr) {
    return myr * 6.85;
}


var twd = convert_myr_to_twd(1000);
console.log('The currency in TWD is : ', twd);