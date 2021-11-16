import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import { Divider } from '@mui/material'
import filter from "../../../assets/mobImages/filter-black/filter.png"
import Dot from "../../../assets/mobImages/dot.png"


function BottomContainer() {
    return (
        <div className="plp-bottom-container">
            <div className="plp-sort-container">
              <ImportExportIcon />
              <h6>Sort</h6>
            </div>
            <Divider orientation="vertical" flexItem sx={{ 
              height: '24px',
              marginTop: '8px',
              marginBottom: '8px',
              marginLeft: '4px'
              }}/>
            <div className="plp-filter-container">
              <img src={filter} alt="filter-icon" />
              <h6>Filter</h6>
              <img src={Dot} alt="dot-icon" className="dot-icon"/>
            </div>
          </div>
    )
}

export default BottomContainer
