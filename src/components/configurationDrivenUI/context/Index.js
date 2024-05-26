import { createContext, useState, useEffect } from "react";
import ConfigDrivenDataServiceCall from "../Data";

export const ConfigDrivenContext = createContext(null);

export default function ConfigDrivenGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
        setLoading(true);
        //original service call
        const response = await  ConfigDrivenDataServiceCall();
        console.log('response: ', response);

        setEnabledFlags(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      }
    }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <ConfigDrivenContext.Provider value={{loading, enabledFlags }}>
      {children}
    </ConfigDrivenContext.Provider>
  );
}

// import { createContext, useState, useEffect } from "react";
// import ConfigDrivenDataServiceCall from "../Data";

// export const ConfigDrivenContext = createContext(null);

// export default function ConfigDrivenGlobalState({ children }) {
//   const [loading, setLoading] = useState(false);
//   const [enabledFlags, setEnabledFlags] = useState({});

//   async function fetchFeatureFlags() {
//     try {
//       setLoading(true);
//       const response = await ConfigDrivenDataServiceCall();
//       setEnabledFlags(response);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//       throw new Error(error);
//     }
//   }

//   useEffect(() => {
//     fetchFeatureFlags();
//   }, []);

//   return (
//     <ConfigDrivenContext.Provider value={{ loading, enabledFlags }}>
//       {children}
//     </ConfigDrivenContext.Provider>
//   );
// }
