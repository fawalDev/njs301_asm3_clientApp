import { useMemo } from "react"
import validate from "../ultil/inputValidationUltil/validate"

/**
 * @param {string} inputTitle - Tên của input, sẽ được chèn vào thông báo lỗi nếu trả về invalid (không hợp lệ). 
 *                              Vd: inputTitle = 'name' => 'name can't not be null'
 * @param {string} inputVal - giá trị input cần xác thực
 * @param {Functionp[]} funcArr - mảng chứa các hàm xác thực, 
 *          các hàm này luôn nhận 1 tham số là giá trị input 
 *          và trả về một mảng với định dạng như sau [true] hoặc [false, 'error msg']
 *          useValidate() sẽ gọi hàm validate(), 
 *                        validate() duyệt qua mảng các hàm xác thực, tiến hành xác thực trên từng hàm
 *                        nếu input xác thực ko hợp lệ ở bất kỳ hàm nào sẽ dừng vòng lặp trả về mảng [false, 'error msg']
 *                        nếu duyệt qua tất cả các hàm xác thực đều hợp lệ, trả về  ''

 *          ''                  là kiểu falsy       =>      nếu có thông báo lỗi là hợp lệ
 *          'string not null'   là kiểu trusthy     =>      nếu có thông báo lỗi là ko hợp lệ 
 *                                                          và cần hiển thị thông báo lỗi lên UI cho người dùng biết
 *          
 */
export default function useValidate(inputTitle: string, inputVal: string | number, funcArr: Function[]) {
    const invalidAuthorMsg = useMemo(
        () => validate(inputTitle, inputVal, funcArr),
        [funcArr, inputTitle, inputVal])

    return invalidAuthorMsg
}

