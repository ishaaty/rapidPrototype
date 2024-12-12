import './ExportCard.css'

export default function ExportCard() {
    return (
        <>
            <div class="export">
                <div class="switchcont">
                    <label id="switchlabel">Public</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
                <h4 id="exporthead">Export Options:</h4>
                <div class="exportbuttons">
                    <button id="pdf">pdf</button>
                    <button id="jpeg">jpeg</button>
                    <button id="png">png</button>
                </div>
            </div>
        </>
    )
}