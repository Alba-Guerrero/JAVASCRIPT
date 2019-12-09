
var app={}
app.apiKey="416beb7f3a982513363c02f8b5ed4ff8";
app.url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=416beb7f3a982513363c02f8b5ed4ff8&units=metric";




app.cargaDatos = function(){

    $.ajax({
    
    url: app.url,
    
    success: function( data ) {
     app.datos = data;
    app.procesaDatos();
    
    },
    
    error: function(){
    
    alert("se ha producido un error inesperado");
    
    }
    
    });
    
    }

   
    app.procesaDatos = function(){
        //app.cityName=app.datos.name;
        app.nombre = app.datos.weather[0].main;
        app.temperatura = app.datos.main.temp;
        app.humedad = app.datos.main.humidity;
        app.temp_max=app.datos.main.temp_max;
        app.temp_min=app.datos.main.temp_min;
        app.wind=app.datos.wind.speed;
    
        var condicionIcono = app.datos.weather[0].icon;
        //app.icono = app.obtenIcono( condicionIcono );
    
        app.muestra();
    
    } 
    app.muestra = function(){
        $('#localidad').append("<h1>"+app.cityName+"</h1>");
        $('#temperatura').append("<p>"+"Temperatura" + app.temperatura +"</p>");
        $('#tempMin').append("<p>"+"Temperatura minima " + app.temp_min +"</p>");
        $('#tempMax').append("<p>"+"Temperatura máxima " + app.temp_max +"</p>");
        $('#humidity').append("<p>"+"Humedad " + app.humedad +"</p>");
        $('#wind').append("<p"+"Velocidad del viento " + app.wind +"</p>");
        //$('#js_w_icon').append(" <i class='wi " + app.icono + "'></i>");
    
        //$('#js_w_icon').append("<p class='weather_name'>" +  app.condicionNombre.toUpperCase() + "</p>");
    
    }/*
    app.obtenIcono = function( weatherIcon ) {
    
        var icon;
        switch( weatherIcon ){
            case "01d":
            case "01n":
            icon = "wi-day-sunny";
            break;
            case "02d":
            case "02n":
            icon = "wi-day-cloudy";
            break;
    
            case "03d":
            case "03n":
            icon = "wi-cloud";
            break;
    
            case "04d":
            case "04n":
            icon = "wi-cloudy";
            break;
    
            case "09d":
            case "09n":
            icon = "wi-rain";
            break;
    
            case "10d":
            case "10n":
            icon = "wi-day-rain-mix";
            break;
    
            case "11d":
            case "11n":
            icon = "wi-thunderstorm";
            break;
    
            case "13d":
            case "13n":
            icon = "wi-snow";
            break;
    
            case "50d":
            case "50n":
            icon = "wi-fog";
            break;
    
            default:
            icon = "wi-day-sunny";
            break;
    
        }
    
        return icon;
    }*/
    app.cargaDatos();

























$.getJSON('datos.json', function(datos) {
            var output="<ul>";
            for (var i in datos.usuarios) {
                output+="<li>" + datos.usuarios[i].nombre + " " + datos.usuarios[i].apellidos + " - " + datos.usuarios[i].nacimiento.dia+"/"+datos.usuarios[i].nacimiento.mes+"/"+datos.usuarios[i].nacimiento.año+"</li>";
                }
            output+="</ul>";
            document.getElementById("ficha").innerHTML=output;
        });