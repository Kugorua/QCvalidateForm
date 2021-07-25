let validateObj = {
    name :[
        {
            value: (value) => {
                return value == "";
            },
            message: "field is required"
        },
        {
            value: (value) => {
                return  !(/^([^0-9]*)$/.test(value));
            },
            message: "Không chứa kí tự số"
        },
        {
            value: (value) => {
                return  (/[!@#$%^&*]/.test(value));
            },
            message: "Không chứa kí !@#$%^&*"
        },
        {
            value: (value) => {
                return  !(value.length >= 5 && value.length <= 50);
            }, 
            message:  "Yêu cầu độ dài kí tự 4-50"
        },
    ],
    chucdanh: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        {
            value: (value) => {
                return  !(value.length >= 3 && value.length <= 50);
            }, 
            message:  "Yêu cầu độ dài kí tự 3-50"
        },
        {
            value: (value) => {
                return  (/[!@#$%^&*]/.test(value));
            },
            message: "Không chứa kí !@#$%^&*"
        },
    ],
    tendn: [
        {
            value: (value) => {
                if (value !== "") {
                    return  (/^\d+$/.test(value)); 
                }
            },
            message: "Không chứa kí tự số"
        },
        {
            value: (value) => {
                if (value !== "") {
                    return  (/[!@#$%^&*]/.test(value));
                 }
               
            },
            message: "Không chứa kí !@#$%^&*"
        },
        {
            value: (value) => {
                if (value !== "") {
                    return  !(value.length >= 4 && value.length <= 50);
                 }
               
            }, 
            message:  "Yêu cầu độ dài kí tự 4-50"
        },
        
        
    ],
    ten_dia_chi: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        {
            value: (value) => {
                return  (/^\d+$/.test(value));
            },
            message: "Không chứa kí tự số"
        },
        {
            value: (value) => {
                return  (/[!@#$%^&*]/.test(value));
            },
            message: "Không chứa kí !@#$%^&*"
        },
        {
            value: (value) => {
                return  !(value.length >= 4 && value.length <= 50);
            }, 
            message:  "Yêu cầu độ dài kí tự 4-50"
        },
    ],
    email: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        {
            value: (value) => {
                return  !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value));
            },
            message: " Email không hợp lệ"
        },
        
        {
            value: (value) => {
                return  !( value.length <= 40);
            }, 
            message:  "Yêu cầu độ dài kí tự  < 40"
        },
    ],
    sdt: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        {
            value: (value) => {
                return  (/[!@#$%^&*]/.test(value));
            },
            message: "Không chứa kí !@#$%^&*"
        },
        {
            value: (value) => {
                return (!(/^\d+$/.test(value))) || ( value.length < 10 || value.length > 15);
            }, 
            message:  "sdt không hợp lệ"
        },
    ],
   
    web: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        {
            value: (value) => {
                return !(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(value));
            }, 
            message:  "web không hợp lệ"
        },
    ],
    nganhnghe: [
        {
            value: (value) => {
                return value == "";
            },
            message:  "field is required"
        },
        
        {
            value: (value) => {
                function removeAscent (str) {
                    if (str === null || str === undefined) return str;
                     str = str.toLowerCase();
                     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                     str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                     str = str.replace(/đ/g, "d");
                     return str;
                }
                
             return (!((/^[a-zA-Z ]{2,}$/.test(removeAscent(value))) || (/^\d+$/.test(value)))) 
            }, 
            message:  "yêu cầu chỉ nhập chữ hoặc số"
        },
        {
            value: (value) => {
                return  !( value.length <= 500 && value.length >= 4);
            }, 
            message:  "Yêu cầu độ dài kí tự 4-500"
        },
    ]

} 



let fieldValue = document.getElementsByClassName('field-value');
let submit = document.getElementById('submit');
let isCheck = false;
function isCheckValiadate() {
    isCheck = false;
    for (let i = 0; i < fieldValue.length; i++){
        let validateObjItem = validateObj[fieldValue[i].name];
        if (fieldValue[i].name == "name") {
            fieldValue[i].value = fieldValue[i].value.toUpperCase(); 
        }
        fieldValue[i].value = fieldValue[i].value.trim();
        if (validateObj[fieldValue[i].name]) {
            for (let item = 0; item < validateObjItem.length;  item++) {
                if (validateObjItem[item].value(fieldValue[i].value)) {
                    isCheck = true;
                    fieldValue[i].parentElement.querySelector(".message").innerText = validateObjItem[item].message
                    break;
                } else {
                    fieldValue[i].parentElement.querySelector(".message").innerText = ""
                }
            }
        }
    }
    if (!isCheck) {
        alert("Dăng ký thành công")
    }
}


submit.addEventListener('click', function (e) {
    e.preventDefault();
    isCheckValiadate()
})