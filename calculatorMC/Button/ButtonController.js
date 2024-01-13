function mainButtonController(){
    console.log("main")
    var id1 = functionButtonController();
    var id2 = numberButtonController();
    var id3=operationButtonController();
    console.log("ids "+id1+id2+id3)
    const IDarr = [id1,id2,id3];
    return IDarr;
}
