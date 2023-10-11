export default function ResetButton({resetMethod}) {
    function resetCount() {
        resetMethod()
    }

    return (
        <div>
            <button className="resetButton" onClick={resetCount}>Reset</button>
        </div>
    )
}