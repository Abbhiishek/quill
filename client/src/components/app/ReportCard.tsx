import ReactSpeedometer from "react-d3-speedometer"
function ReportCard({ marks }: { marks: number }) {
    return (
        <div className='pt-10  px-3 py-2 text-center rounded-lg bg-slate-200 border-2 border-teal-300'>
            <span className="text-center">Your Result</span>
            <ReactSpeedometer
                value={marks || 0}
                maxValue={100}
                currentValueText={`⌛`}
            />

            <h3 className="text-emerald-600">{marks}/100</h3>
        </div>
    )
}
export default ReportCard
