/* Демонстрационные данные Smart Campus. Все значения учебные. */
(function(){
const rooms = [
{id:"A-101",building:"Корпус A",floor:1,type:"Компьютерный класс",temperature:23.4,co2:720,energy:3.2,occupancy:18,status:"normal"},
{id:"A-102",building:"Корпус A",floor:1,type:"Лекционная",temperature:22.1,co2:640,energy:2.1,occupancy:26,status:"normal"},
{id:"A-201",building:"Корпус A",floor:2,type:"Лаборатория сетей",temperature:25.8,co2:890,energy:5.4,occupancy:12,status:"normal"},
{id:"A-205",building:"Корпус A",floor:2,type:"Аудитория",temperature:29.4,co2:1580,energy:4.8,occupancy:24,status:"critical"},
{id:"A-301",building:"Корпус A",floor:3,type:"Серверная",temperature:31.8,co2:680,energy:7.1,occupancy:0,status:"warning"},
{id:"B-103",building:"Корпус B",floor:1,type:"Компьютерный класс",temperature:22.8,co2:760,energy:3.8,occupancy:20,status:"normal"},
{id:"B-105",building:"Корпус B",floor:1,type:"Кабинет",temperature:21.6,co2:590,energy:1.8,occupancy:8,status:"normal"},
{id:"B-204",building:"Корпус B",floor:2,type:"Лаборатория электроники",temperature:26.2,co2:930,energy:5.9,occupancy:14,status:"normal"},
{id:"B-208",building:"Корпус B",floor:2,type:"Аудитория",temperature:23.7,co2:1080,energy:2.8,occupancy:22,status:"warning"},
{id:"B-302",building:"Корпус B",floor:3,type:"Переговорная",temperature:22.4,co2:610,energy:1.5,occupancy:5,status:"normal"},
{id:"C-101",building:"Корпус C",floor:1,type:"Библиотека",temperature:22.7,co2:810,energy:4.2,occupancy:31,status:"normal"},
{id:"C-202",building:"Корпус C",floor:2,type:"Администрация",temperature:24.1,co2:690,energy:2.6,occupancy:11,status:"normal"}
];
const types=["Temperature Sensor","CO₂ Sensor","Smart Meter","Motion Sensor","Access Controller"];
const devices = [];
rooms.forEach((r,i)=>{types.slice(0, i%3===0?2:1).forEach((t,j)=>devices.push({id:(t==="Temperature Sensor"?"TEMP":t==="CO₂ Sensor"?"CO2":t==="Smart Meter"?"PWR":"MOT")+"-"+r.id+"-"+(j+1),room:r.id,type:t,status:(r.id==="A-205"&&t==="CO₂ Sensor")||(r.id==="A-301"&&t==="Temperature Sensor")?"offline":"online",value:t==="Temperature Sensor"?r.temperature:t==="CO₂ Sensor"?r.co2:r.energy,unit:t==="Temperature Sensor"?"°C":t==="CO₂ Sensor"?"ppm":"kWh",updatedAt:"2026-10-22 12:"+String(10+i).padStart(2,"0")}));});
devices.push({id:"CAM-B1-01",room:"B-103",type:"IP Camera",status:"online",value:"Активна",unit:"",updatedAt:"2026-10-22 12:19"},{id:"ACCESS-C1-01",room:"C-101",type:"Access Controller",status:"online",value:"Норма",unit:"",updatedAt:"2026-10-22 12:18"},{id:"PWR-C202-01",room:"C-202",type:"Smart Meter",status:"online",value:2.6,unit:"kWh",updatedAt:"2026-10-22 12:17"});
const incidents=[
{id:1001,title:"Высокий уровень CO₂",room:"A-205",priority:"high",status:"open",assignee:"Инженер",comment:"Проверить вентиляцию после пары.",created:"Сегодня, 11:42"},
{id:1002,title:"Перегрев серверной",room:"A-301",priority:"critical",status:"in_progress",assignee:"Техслужба",comment:"Проверить кондиционер и фильтры.",created:"Сегодня, 10:18"},
{id:1003,title:"Датчик движения не отвечает",room:"B-208",priority:"medium",status:"open",assignee:"Оператор",comment:"Повторно подключить датчик.",created:"Сегодня, 09:36"},
{id:1004,title:"Освещение в лаборатории",room:"B-204",priority:"low",status:"resolved",assignee:"Электрик",comment:"Заменена лампа.",created:"Вчера, 16:20"}
];
const energy=[{label:"Пн",a:118,b:96,c:83},{label:"Вт",a:126,b:91,c:88},{label:"Ср",a:121,b:103,c:79},{label:"Чт",a:139,b:98,c:94},{label:"Пт",a:132,b:109,c:87},{label:"Сб",a:86,b:65,c:52},{label:"Вс",a:72,b:58,c:46}];
window.SC_DEFAULTS={rooms,devices,incidents,energy};
})();