import "./DropDownFilter.css"
import { observer } from "mobx-react";

function DropDownFilter({ dropDownOptions, placeHolder, category, updateCategory }: { dropDownOptions: string[], placeHolder: string, category: string, updateCategory: (category: string, input: string) => void}) {
    return ( 
        <select className="filter" spellCheck="false" onChange={(e) => {updateCategory(category, e.target.value)}}>
            <option value="" disabled selected>{placeHolder}</option>
            <option key="starter" value="">All</option>
            {
                dropDownOptions.map((listItem) => (
                    <option key={listItem} value={listItem}>{listItem}</option>
                ))
            }
        </select>
     );
}

export default observer(DropDownFilter);