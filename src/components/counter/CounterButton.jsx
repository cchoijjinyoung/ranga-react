import { PropTypes } from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {
    return (
        <div>
            <button className="counterButton" 
                    onClick={() => incrementMethod(by)}
            >+{by}</button>
            <button className="counterButton" 
                    onClick={() => decrementMethod(by)}
            >-{by}</button>
        </div>         
    )
}
// by가 number 값이 아니면 경고해준다.
CounterButton.propType = {
    by: PropTypes.number
}

// by 기본값 => 1
CounterButton.defaultProps = {
    by: 1
}