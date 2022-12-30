class HomeWork{

    constructor(id,name,addedtime,deadline,mod,students,lessonid,isgradable,isclosed,graddeadline,hwinfo){
        this.id=id;
        this.name=name;
        this.addedtime=addedtime;
        this.deadline=deadline;
        this.mods=[mod];
        this.students=[students];
        this.lessonid=lessonid;
        this.isgradable=isgradable;
        this.isclosed=isclosed;
        this.graddeadline=graddeadline;
        this.hwinfo=hwinfo;

    }
}
export default HomeWork