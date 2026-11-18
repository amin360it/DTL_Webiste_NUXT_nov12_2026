export type GalleryImage = { src: string; alt: string; caption: string; place: string }

function placeOf(caption: string) {
  const c = caption.toLowerCase()
  if (c.includes('chittagong') || c.includes('chattogram')) return 'Chattogram'
  if (c.includes('dhaka') || c.includes('gazipur') || c.includes('narayanganj') || c.includes('narayangonj') || c.includes('tongi') || c.includes('savar')) return 'Dhaka'
  return 'Other'
}

const raw: Omit<GalleryImage, 'place'>[] = [
  { src: "/assets/img/01 radison bay view hotele03c.jpg", alt: "Radisson Bay View Hotel", caption: "Radisson Bay View Hotel, Chittagong" },
  { src: "/assets/img/2015-03-07_bss-01_3133833e10.jpg", alt: "Krishi Bid Project", caption: "Krishi Bid Project in Khamarbari, Dhaka" },
  { src: "/assets/img/04-dhaka-metro-railfc4e.jpg", alt: "Dhaka Metro Rail", caption: "Dhaka Metro Rail (MRT Line 6), Dhaka" },
  { src: "/assets/img/12-fast-dhaka-elevated-expressway-(ccb)-crop-u3097023e0.png", alt: "Fast Dhaka Elevated Expressway", caption: "Fast Dhaka Elevated Expressway (CCB), Kuril, Dhaka" },
  { src: "/assets/img/16-sena-bhabande35.jpg", alt: "Sena Bhaban", caption: "Sena Bhaban, Dhaka" },
  { src: "/assets/img/56-ifs-texwareaccb.jpg", alt: "IFS Texware", caption: "IFS Texware, Narayanganj" },
  { src: "/assets/img/03-matarbari-ultra-super-critical-coal-fired-power-project-crop-u30951ce51.png", alt: "Matarbari Power Project", caption: "Matarbari Ultra Super Critical Coal-Fired Power Project" },
  { src: "/assets/img/17-bangladesh-garment-manufacturers-and-exporters-associationexporters-association-(bgmea)8525.jpg", alt: "BGMEA", caption: "BGMEA, Uttara, Dhaka" },
  { src: "/assets/img/05-comfort-socks09f8.jpg", alt: "Comfort Socks", caption: "Comfort Socks, Tongi" },
  { src: "/assets/img/09-sajbati-(-windy-group-)-crop-u3125905fc.png", alt: "Sajbati Windy Group", caption: "Sajbati (Windy Group), Mohakhali DOHS, Dhaka" },
  { src: "/assets/img/02-almas-point8f6d.jpg", alt: "Almas Point", caption: "Almas Point, Narayangonj" },
  { src: "/assets/img/08-kepz30aa.jpg", alt: "KEPZ", caption: "KEPZ, Chittagong" },
  { src: "/assets/img/26-american-international-schoolaa44.jpg", alt: "American International School", caption: "American International School, Dhaka" },
  { src: "/assets/img/20-united-complex1558.jpg", alt: "United Complex", caption: "United Complex, Dhaka" },
  { src: "/assets/img/19-romask-tower21e8.jpg", alt: "Romask Tower", caption: "Romask Tower, Hatirjheel, Dhaka" },
  { src: "/assets/img/31-reflections-holdings-ltdf758.jpg", alt: "Reflections Holdings Ltd", caption: "Reflections Holdings Ltd. Assha, Niketon, Gulshan-1, Dhaka" },
  { src: "/assets/img/14-kallal-group-(-md-house-)2e24.jpg", alt: "Kallal Group MD House", caption: "Kallal Group (MD House), Dhaka" },
  { src: "/assets/img/15-bangladesh-parjatan-corporation3365.jpg", alt: "Bangladesh Parjatan Corporation", caption: "Bangladesh Parjatan Corporation, Dhaka" },
  { src: "/assets/img/18-bank-asia-limited,-corporate-offices87aa.jpg", alt: "Bank Asia Limited", caption: "Bank Asia Limited, Corporate Offices, Dhaka" },
  { src: "/assets/img/21-navana-yusuf-infinity6942.jpg", alt: "Navana Yusuf Infinity", caption: "Navana Yusuf Infinity, Dhaka" },
  { src: "/assets/img/01-the-tangail-filling-station-crop-u31280a7f9.png", alt: "The Tangail Filling Station", caption: "The Tangail Filling Station, Tongi" },
  { src: "/assets/img/28-bay-s-kinara-crop-u312731145.png", alt: "Bay's Kinara", caption: "Bay's Kinara, Dhaka" },
  { src: "/assets/img/29-bay-s-amarantha-crop-u312824535.png", alt: "Bay's Amarantha", caption: "Bay's Amarantha, Dhaka" },
  { src: "/assets/img/06-sabra-(disha-engineering)751c.jpg", alt: "Sabra Disha Engineering", caption: "Sabra (Disha Engineering), Gulshan-1, Dhaka" },
  { src: "/assets/img/22-navana-fh-solaris-crop-u31270641b.png", alt: "Navana FH Solaris", caption: "Navana FH Solaris, Bijoy Nagar Road, Dhaka" },
  { src: "/assets/img/23-data-edge-crop-u312763d60.png", alt: "Data Edge", caption: "Data Edge, Dhaka" },
  { src: "/assets/img/37-navana-chanelle-de-zohrab542.jpg", alt: "Navana Chanelle De Zohra", caption: "Navana Chanelle De Zohra, Gulshan-2, Dhaka" },
  { src: "/assets/img/39-navana-white-stone8671.jpg", alt: "Navana White Stone", caption: "Navana White Stone, Gulshan, Dhaka" },
  { src: "/assets/img/41-navana-jalal-palace6cbf.jpg", alt: "Navana Jalal Palace", caption: "Navana Jalal Palace, Chittagong" },
  { src: "/assets/img/40-navana-sharif-oakdale-crop-u350980077.png", alt: "Navana Sharif Oakdale", caption: "Navana Sharif Oakdale, Gulshan-2, Dhaka" },
  { src: "/assets/img/42-navana-azalea8f1a.jpg", alt: "Navana Azalea", caption: "Navana Azalea, Baridhara, Dhaka" },
  { src: "/assets/img/07--nowra-chairmen-house-(-rongdhonu-group-)7180.jpg", alt: "Nowra Chairman House", caption: "Nowra Chairman House (Rongdhonu Group), Narayanganj" },
  { src: "/assets/img/10-south-east-textileea07.jpg", alt: "South East Textile", caption: "South East Textile, Mirzapur, Tangail" },
  { src: "/assets/img/50-bay-north-park0a4a.jpg", alt: "Bay North Park", caption: "Bay North Park, Dhaka" },
  { src: "/assets/img/27-laila-styled547.jpg", alt: "Laila Style", caption: "Laila Style, Gazipur, Dhaka" },
  { src: "/assets/img/49-eastern-housing-ltd3c98.jpg", alt: "Eastern Housing Ltd", caption: "Eastern Housing Ltd (EHL), Banani, Dhaka" },
  { src: "/assets/img/36-sanmer-jamil-residenceed85.jpg", alt: "Sanmer Jamil Residence", caption: "Sanmer Jamil Residence, Banani, Dhaka" }
]

export const projectGallery: GalleryImage[] = raw.map((item) => ({ ...item, place: placeOf(item.caption) }))
