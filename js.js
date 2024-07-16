import {renderCountriesList} from './dom-utils.js'
import {renderDashboard} from './view-dahboard.js'
import { renderDetail } from './view-details.js'

if (window.location.search.includes("?country=")) {
   renderDetail()
} else {
    document.querySelector(".filters").classList.add("active")
    renderDashboard()
}
    
    