import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const LearnBasic = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <h2 className='text-center font-bold text-4xl mt-20 mb-4 uppercase'>Learn Some Basic Ideas of Classification of Photography</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="card card-side bg-base-100 shadow-xl m-6 flex flex-col">
                    <div className=''>
                        <figure><img className='rounded-lg' src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=sph" alt="Movie" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Portrait Photography</h2>
                        <p>Portrait photography focuses on capturing the likeness, personality, and expressions of individuals or groups...</p>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn" onClick={() => window.my_modal_5.showModal()}>Learn More</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Portrait Photography</h3>
                                <p className="py-4">Portrait photography focuses on capturing the likeness, personality, and expressions of individuals or groups. It often emphasizes the subjects face and may include close-ups or full-body shots. Portrait photography can be further classified into formal portraits, environmental portraits, candid portraits, and more.</p>
                                <p>Camera Setup: A versatile lens like a 50mm or 85mm prime lens is often preferred for portraiture due to their ability to produce a flattering perspective and shallow depth of field. Additionally, a camera with good autofocus capabilities and a wide aperture for creamy bokeh is beneficial. Portrait photographers may also use reflectors or external lighting equipment to control the lighting and enhance the subjects features.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl m-6 flex flex-col">
                    <div className=''>
                        <figure><img className='rounded-lg' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="Movie" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Landscape Photography</h2>
                        <p>Landscape photography aims to capture the beauty and grandeur of natural landscapes, such as mountains, forests, seascapes, and vast...</p>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn" onClick={() => window.my_modal_4.showModal()}>Learn More</button>
                        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Landscape Photography</h3>
                                <p className="py-4">Landscape photography aims to capture the beauty and grandeur of natural landscapes, such as mountains, forests, seascapes, and vast open spaces. It often emphasizes the scenery, lighting, and composition to create visually stunning images that evoke a sense of awe and tranquility.</p>
                                <p>Camera Setup: Landscape photography often benefits from a wide-angle lens to capture expansive scenes. A sturdy tripod is essential to keep the camera steady for long exposures or when shooting in low light conditions. Neutral density (ND) filters are commonly used to control exposure and create motion blur effects with flowing water or clouds. Additionally, landscape photographers may utilize graduated ND filters to balance exposure between the sky and foreground.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl m-6 flex flex-col">
                    <div className=''>
                        <figure><img className='rounded-lg' src="https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?w=740&t=st=1686416994~exp=1686417594~hmac=bcddc1627d5041aba0d4e4c8a16b720a72586cfef6dd5f95ac361b5755a8e5b8" alt="Movie" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Wildlife Photography</h2>
                        <p>Wildlife photography involves capturing animals in their natural habitats. It requires patience, knowledge of animal behavior...</p>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn" onClick={() => window.my_modal_3.showModal()}>Learn More</button>
                        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Wildlife Photography</h3>
                                <p className="py-4">Wildlife photography involves capturing animals in their natural habitats. It requires patience, knowledge of animal behavior, and the ability to work in challenging environments. Wildlife photographers strive to document and portray the diversity, behavior, and unique characteristics of various animal species.</p>
                                <p>Camera Setup: Wildlife photography typically requires a telephoto lens with a long focal length to capture distant subjects. Lenses in the range of 200mm to 600mm are commonly used for wildlife photography. A camera with fast autofocus and high continuous shooting speed is beneficial to capture fast-moving animals. Wildlife photographers often carry additional equipment like a sturdy tripod, monopod, or bean bag for stability.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl m-6 flex flex-col">
                    <div className=''>
                        <figure><img className='rounded-lg' src="https://img.freepik.com/free-photo/person-middle-streets-poznan-surrounded-by-old-buildings-captured-poland_181624-7908.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="Movie" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Street Photography</h2>
                        <p>Street photography focuses on capturing candid moments and scenes in public spaces, often in urban environments...</p>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn" onClick={() => window.my_modal_2.showModal()}>Learn More</button>
                        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Street Photography</h3>
                                <p className="py-4">Street photography focuses on capturing candid moments and scenes in public spaces, often in urban environments. It aims to capture the essence of everyday life, human interactions, cultural aspects, and the atmosphere of a particular location. Street photography is spontaneous and often reflects the photographers perspective and storytelling skills. </p>
                                <p>Camera Setup: Street photographers often prefer compact or mirrorless cameras that are discreet and lightweight, allowing for quick and inconspicuous shooting. A versatile prime lens, such as a 35mm or 50mm, is popular for street photography due to its wide field of view and natural perspective. Some street photographers may prefer zone focusing techniques over relying solely on autofocus.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>


        </>
    );
};

export default LearnBasic;