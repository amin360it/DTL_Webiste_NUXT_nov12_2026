import { divisionDealers } from '../app/data/divisionDealers.ts'

for (const [key, div] of Object.entries(divisionDealers)) {
  console.log(`\n===== ${key} =====`)
  for (const d of div.dealers) {
    console.log(`${d.customer}  ||  ${d.address}`)
  }
}
