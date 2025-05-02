import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

function FourthPageIntro() {

    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={inViewRef}>
            {inView && (
                <div className='w-full text-center'>
                    <TypeAnimation
                        sequence={[
                            `New Chapter Beginnings...`,
                            3100,
                        ]}
                        wrapper="div"
                        speed={10}
                        className='w-full max-sm:text-[18px] text-[2em]'
                        style={{ display: 'inline-block', fontFamily: 'var(--font-personal-use)' }}
                        repeat={Infinity}
                    />
                </div>
            )}
        </div>
    )
}

export default FourthPageIntro