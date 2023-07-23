import { supabase } from "../supabase/index";
import { AppState } from "../interfaces/userInterface";
import { TABLES, COLUMNS } from "../interfaces/enums/Tables";

interface customParams {
  nro_documento: number;
  password: string;
}

// Funcion mediante la cual obtenemos los datos del usuario que intenta Iniciar Sesion
/* {
  nro_documento
 password,
}: customParams */
const getUserData = async (nro_documento: number): Promise<AppState["data"]> => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  if (userData !== null) {
    return userData;
  }
  const { data, error } = await supabase
    .from(TABLES.CUSTOMERS)
    .select()
    .eq(COLUMNS.DOCUMENT, nro_documento)
    //.eq(COLUMNS.PASSWORD, password);
  if (error) throw new Error("Error al obtener el cliente solicitado");
  return data || [];
};

export { getUserData };
