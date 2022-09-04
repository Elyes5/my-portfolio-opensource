import TitleComponent from "./TitleComponent"
import InputComponent from "./InputComponent"
import { CSSTransition } from "react-transition-group";
import { useState } from 'react'
import ToastComponent from "./ToastComponent";
function ContactComponent(){
   const  [data,setData] = useState({
        fullName : '',
        subject : '',
        content : '',
    })
    const [clicked,setClicked] = useState(false);
    const [process,setProcess] = useState(false);
    const [show,setShow] = useState(false);
    const [text,setText] = useState('')
    const submitForm = () =>{
        setClicked(true);
        setProcess(true);
        if (data.fullName.trim().length > 0 && data.subject.trim().length > 0 && data.content.trim().length > 0)
        {   const sdata = JSON.stringify(data)
            console.log(sdata);
            fetch('https://springboot-email-sender.herokuapp.com/api/v1/sendmail', {
                 method: 'POST',
                headers: {'content-type': 'application/json'},
                body: sdata
}).then(response => {return response.json()})
            .then(data => {
                console.log(data);
                setProcess(false); 
                setText(data.message);
                setShow(true);
                setTimeout(() => setShow(false),5000)
            })
        }
    }
return (
    <div>
        <CSSTransition in={show} classNames="vertical-fade" timeout={4500}>
        <ToastComponent show={show} text={text} handleShow={() => setShow(false)}/>
        </CSSTransition>
        <TitleComponent title="Contact"/>
        <div className="grid-cols-2 md:grid-cols-3 grid md:ml-16 mb-24">
            <div data-aos="fade-right" duration="400"  className="md:col-span-2 col-span-2 md:block flex justify-center md:mr-10 ml-10 mr-10 md:ml-0">
                <div className="block rounded-2xl overflow-hidden">
                <iframe title="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.210721381888!2d10.186719815146466!3d36.8613746799361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4b0ecda8a3%3A0xc561ba5428c31de3!2sISI%20Ariana!5e0!3m2!1sfr!2stn!4v1662200578713!5m2!1sfr!2stn" width="1000" height="550"  className="myMap" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="md:col-span-1 col-span-2 md:mt-0 mt-5" data-aos="fade" duration="400">
                <div className="flex justify-center flex-col items-center gap-y-3 indent">
                    <h3 className="DMMono text-blue-400 md:text-md sm:text-2xl text-xl">Let's get in touch</h3>
                    <div className="border-2 border-white p-5 rounded-md">
                        <form onSubmit={e => e.preventDefault()}>
                            <InputComponent name="Full Name" placeholder="Enter your full name" changeValue={(event) => setData({...data,fullName:event.target.value})} formData={data.fullName}/>
                            {(data.fullName.trim().length === 0 && clicked) && (
                                <div className="text-red-400">
                                    Full name required
                                </div>
                            )}
                            <InputComponent name="Subject" placeholder="Enter the subject" changeValue={(event) => setData({...data,subject:event.target.value})} formData={data.subject}/>
                            {(data.subject.trim().length === 0 && clicked) && (
                                <div className="text-red-400">
                                    Subject required
                                </div>
                            )}
                            <div className="p-0">
                            <label htmlFor="content" className="DMMono text-white">Content</label>
                            <br></br>
                            <textarea required name="content" onInput={(event) => setData({...data,content:event.target.value})} value={data.content} placeholder="Enter the content" cols="22" rows="8" className="p-1 min-w-full bg-neutral-700 border-2 border-blue-400 text-white rounded-md placeholder-gray"></textarea>    
                            </div>
                            {(data.content.trim().length === 0 && clicked) && (
                                <div className="text-red-400 mt--5">
                                    Content required
                                </div>
                            )}
                            <div>
                                <button type="submit" className={"font-bold DMMono bg-blue-400 text-neutral-700 p-2 mt-3 min-w-full rounded-md " + (data.fullName.trim().length === 0 || data.subject.trim().length === 0 || data.content.trim().length === 0 ? 'bg-blue' : 'bg-blue-500')} onClick={() => submitForm()} disabled={data.fullName.trim().length === 0 || data.subject.trim().length === 0 || data.content.trim().length === 0 || process}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
}
export default ContactComponent