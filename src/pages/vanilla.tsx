import Image from "next/image";
import styles from "./vanilla.module.css";

const data = {
  projectId: "8002",
  documentId: "0014",
  from: "ฝ่ายกิจการภายใน",
  date: "25 สิงหาคม 2566",
  to: "รองคณบดี (รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)",
  itemToRequest: "สถานที่และอุปกรณ์",
  projectName: "รับน้องหนึ่งเดือน ปีการศึกษา 2566",
  projectObjective:
    "สร้างความสัมพันธ์อันดีและความสามัคคีระหว่างนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
  activity: "จัดกิจกรรม Blood Day",
  toFooter: "รองคณบดี (ศ. ดร.เกษม ชูจารุกูล)",
  //
  headOfVenueStudent: "กฤติน สุวรรณทัต",
  headOfVenueStaff: "วัชรพงษ์ ทองคำสุจริต",
};

export default function Vanilla() {
  return (
    <main className="bg-white min-h-screen text-black">
      <button
        className="p-4 shadow-md rounded-md bg-blue-500 text-white print:hidden"
        onClick={() => {
          // print
          window.print();
        }}
      >
        Print
      </button>
      <div>
        <img alt="ESC" src="/assets/header.png" className={styles["header"]} />
        <div className={styles["page"]}>
          <div className={styles.headingPage}>
            <p>
              <span className={styles["bold"]}>ที่</span> กวศ.{data.projectId}-
              {data.documentId} / 2566
            </p>

            <div className={styles.headingESC}>
              <p>กรรมการนิสิตคณะวิศวกรรมศาสตร์</p>
              <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>
          </div>
          <div className={styles.dateText}>วันที่ {data.date}</div>
        </div>
      </div>
    </main>
  );
}
