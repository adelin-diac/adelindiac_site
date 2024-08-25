import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, listAll } from "firebase/storage";

export async function getFiles(storageFolderName) {
  const styles = {
    image: {
      margin: "0 auto",
      marginTop: "10px",
      fontStyle: "italic",
      color: "rgba(255,255,255,0.8)",
      fontSize: "14px",
    },
  };
  try {
    const folderRef = ref(storage, storageFolderName);
    const content = await listAll(folderRef);
    const labels = content.items.map((item) =>
      item.fullPath.split("_")[1].split(".")[0].replace(/-/g, " ")
    );
    const urls = await Promise.all(
      content.items.map(async (ref) => await getDownloadURL(ref))
    );
    return urls.map((url, idx) => {
      return (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {url.includes(".mp4") ? (
            <video
              src={url}
              controls
              autoPlay
              // height="480"
              className="image extra-image"></video>
          ) : (
            <img
              src={url}
              alt="Failed to load"
              className="image extra-image"></img>
          )}
          <label style={styles.image}>{labels[idx]}</label>
        </div>
      );
    });
  } catch {
    return <div>Failed to load data</div>;
  }
}
