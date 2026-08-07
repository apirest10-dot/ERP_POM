import xlsx from 'xlsx'
export class ExcelFileUtil{
    static getExcelData(FilePath:string,sheetName:string)
    {
      try {
        //get path of file into WB
        const workbook = xlsx.readFile(FilePath)  
        //get sheet from WB
        const sheet = workbook.Sheets[sheetName]
        //convert sheet data into json format
        const jsondata = xlsx.utils.sheet_to_json(sheet)
        return jsondata
      } catch (error) {
        console.log(error)
      }  
    }
}