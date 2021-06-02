"use strict";
var resolution;
(function (resolution) {
    resolution["extra_small"] = "75x75";
    resolution["small"] = "240x180";
    resolution["medium"] = "500x375";
    resolution["large"] = "1024x768";
    resolution["extra_large"] = "3072x2304";
})(resolution || (resolution = {}));
const validateScreen = (resolution) => {
    return resolution;
};
console.log(validateScreen("3072x2304"));
