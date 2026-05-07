const PWD_OK = 0;
const PWD_WRONG = 1;

const serverResponse = document.getElementById('response');

function LoginClick()
{

        //получения значения input, затем сравнивание
        let mail = document.querySelector('.mail').value;
        let pass = document.querySelector('.pass').value;
        let pass2 = document.querySelector('.pass2').value;
        
        if(mail == "")
        {
                serverResponse.innerText = "Вы не ввели @Mail.ru";
        }
        else if (mail.length < 3 || mail.length > 42)
        {
                serverResponse.innerText = "Ввидите настоящий адрес электроной почты.";
        }
        else if (pass == "")
        {
                serverResponse.innerText = "Вы не ввели пароль";
        }
        else if (pass.length < 6 || pass.length > 32)
        {
                serverResponse.innerText = "Пароль должен состоять менее 6 и не более 32-ух символов";
        }
        else if(pass != pass2)
        {
                serverResponse.innerText = "Пароль не совпадают";
        }
        else if(HClick == onclick)
        {

        }
        else
        {
                window.location.href='select-skins.html'
                //cef.emit("pwd:try"); // отправляем событие в игру если поля введены.
        }
}

function HClick()
{
        document.getElementById("1").src = "image/skins/H/1.png";
        document.getElementById("2").src = "image/skins/H/2.png";
        document.getElementById("3").src = "image/skins/H/3.png";
        document.getElementById("4").src = "image/skins/H/4.png";
        document.getElementById("5").src = "image/skins/H/5.png";
        document.getElementById("6").src = "image/skins/H/6.png";
        document.getElementById("7").src = "image/skins/H/7.png";
        document.getElementById("8").src = "image/skins/H/8.png";
        document.getElementById("9").src = "image/skins/H/9.png";
}

function MClick() 
{
        document.getElementById("1").src = "image/skins/1.png";
        document.getElementById("2").src = "image/skins/2.png";
        document.getElementById("3").src = "image/skins/3.png";
        document.getElementById("4").src = "image/skins/4.png";
        document.getElementById("5").src = "image/skins/5.png";
        document.getElementById("6").src = "image/skins/6.png";
        document.getElementById("7").src = "image/skins/7.png";
        document.getElementById("8").src = "image/skins/8.png";
        document.getElementById("9").src = "image/skins/9.png";
}

function NextClick()
{
        window.location.href='nikname-code.html'
}

function CodeClick(event)
{
        let code = document.querySelector('.code').value;
}

    //принимаем событие с игры и обрабатываем его
mta.triggerEvent('ui2:onClose', (response) => 
{
        if (response == PWD_OK) 
        {
                cef.set_focus(false);
                cef.hide(true);
                cef.emit('pwd:exit_forms');
        } 
        else 
        {
                cef.hide(true); //скрываем браузер
                cef.set_focus(false); //убираем фокусирование с браузера
        }
});