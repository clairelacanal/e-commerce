import Navbar from '../Components/NAVBAR/Navbar';
import Side from '../Components/SIDE/Side';
import Footer from '../Components/FOOTER/Footer';

function AboutPage(){
    return(
        <>
            <Navbar/>
            <Side/>
            <Footer/>
            <div className='container-about'>
                <div className='titles'>
                    <h1>About Our</h1>
                    <h2>Our e-commerce site sells all kinds of products, from perfumes to clothing and technology, you're sure to find something you love, we're certain of it.</h2>
                </div>
                <div className='paragraphes'>
                    <div className='claire-p'>
                        <img src='' alt=''></img>
                    </div>
                    <div className='yassine-p'>
                        <img src='' alt=''></img>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AboutPage;