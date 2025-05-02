import { TypeAnimation } from 'react-type-animation';

const VaraText = ({ style, text, time }) => {
    return (
        <TypeAnimation
            sequence={[
                'We produce food for Mice',
                1500,
                'We produce food for Hamsters',
                1500,
                'We produce food for Guinea Pigs',
                1500,
                'We produce food for Chinchillas',
                1500
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export default VaraText;