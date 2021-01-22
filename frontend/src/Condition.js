import React from 'react'

function Condition(props) {
    return (
        <div className="conditions">
            <select 
                value={props.condition.parametor} 
                onChange={e => props.parametorChange(e, props.condition.id)}
            >
                <option value="Analysis Type">Analysis Type</option>
                <option value="AnalysisId">AnalysisId</option>
                <option value="Blocks">Blocks</option>
                <option value="Breed">Breed</option>
                <option value="Delta">Delta</option>
                <option value="Fore Diff Min Mean">Fore Diff Min Mean</option>
                <option value="Fore Diff Min SD">Fore Diff Min SD</option>
                <option value="Fore Diff Max Mean">Fore Diff Max Mean</option>
                <option value="Fore Diff Max SD">Fore Diff Max SD</option>
                <option value="Fore Ratio Mean">Fore Ratio Mean</option>
                <option value="Fore Stride Rate">Fore Stride Rate</option>
                <option value="Fore Strides">Fore Strides</option>
                <option value="Fore Signed Vector Sum">Fore Signed Vector Sum</option>
                <option value="Hind Diff Min Mean">Hind Diff Min Mean</option>
                <option value="Hind Diff Min SD">Hind Diff Min SD</option>
                <option value="Hind Diff Max Mean">Hind Diff Max Mean</option>
                <option value="Hind Diff Max SD">Hind Diff Max SD</option>
                <option value="Hind Stride Rate">Hind Stride Rate</option>
                <option value="Hind Strides">Hind Strides</option>
                <option value="Horse">Horse</option>
                <option value="Notes">Notes</option>
                <option value="Owner">Owner</option>
                <option value="StrideSelection">StrideSelection</option>
                <option value="Surface">Surface</option>
                <option value="Trial">Trial</option>
                <option value="TrialId">TrialId</option>
                <option value="Weight">Weight</option>
                <option value="When">When</option>
                <option value="WhenAnalyzed">WhenAnalyzed</option>
                <option value="WhenTrialCreatedLocalTime">WhenTrialCreatedLocalTime</option>
            </select>
            <select 
                value={props.condition.comparator} 
                onChange={e => props.comparatorChange(e, props.condition.id)}
            >
                <option value=">">{'>'}</option>
                <option value="<">{'<'}</option>
                <option value=">=">{'>='}</option>
                <option value="<=">{'<='}</option>
                <option value="==">{'=='}</option>
            </select>
            <input type="text" 
                value={props.condition.value} 
                onChange={e => props.valueChange(e, props.condition.id)}
            />
            <button 
                style={{cursor: "pointer"}}
                onClick={() => props.deleteCondition(props.condition.id)}
            >
                DELETE
            </button>
            <br />
            <br />
        </div>
    )
}

export default Condition
