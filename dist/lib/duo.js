"use strict";

/**
 * Created by zengtao on 2018/3/26.
 */

var fibonacci = function fibonacci(data) {
    var img = data.img;
    var sezhi = data.sezhi;
    var baidi = data.baidi;
    for (var i = 0; i < img.data.length; i += 4) {
        //imgData.data[i]=255-imgData.data[i];
        //imgData.data[i+1]=255-imgData.data[i+1];
        //imgData.data[i+2]=255-imgData.data[i+2];
        var r = img.data[i],
            g = img.data[i + 1],
            b = img.data[i + 2];
        if ([r, g, b].every(function (v, index) {
            if (sezhi) {
                return v == sezhi[index];
            } else {
                if (baidi) {
                    return v < 256 && v > 240;
                }
            }
        })) {
            img.data[i + 3] = 0;
        }
    }
    return img;
};

onmessage = function onmessage(event) {
    var n = event.data;
    postMessage(fibonacci(n));
};