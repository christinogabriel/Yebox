import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here

    YeEngine.AlterThemeSystem(YeEngine.Theme.DarkTheme)
    YeEngine.AlterTheme(YeEngine.Theme.Temacinza)
    YeEngine.ModifyW(document.getElementById("card"),"80vh")
    YeEngine.ModifyH(document.getElementById("card"),"80vh")

    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)

let Update = setInterval(()=>{
    if (YeEngine.Questions_save[0]!= undefined){
        YeEngine.ModifyContentClass(document.getElementById("card"),YeEngine.Questions_save[0])
        
        clearInterval(Update)
    }
    
},600)