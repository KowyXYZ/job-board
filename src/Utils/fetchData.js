export const fetchData = async () => {
    let data = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=e9cfb838&app_key=3e8b99bd56fbe58317e34899ce38eb40`)
    return data.json()
}