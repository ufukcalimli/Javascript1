let messages=["Hello World - English",
             "Merhaba Dünya - Turkish", 
             "Hallo Welt - German",
             "Hallo Wereld - Dutch", 
             "Hallo Heimur - Icelandic", 
             "Γειά σου Κόσμε - Greek",
            "Slav Cîhan - Kurdish"];

for(let msg of messages){
    console.log(messages.indexOf(msg)+1+" - "+msg);
}