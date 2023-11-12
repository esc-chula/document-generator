import React from "react";
import {
  Page,
  Document,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  Line,
  Svg,
} from "@react-pdf/renderer";

// Register font
Font.register({
  family: "TH SarabunPSK",
  fonts: [
    {
      src: "fonts/THSarabun.ttf",
    },
    {
      src: "fonts/THSarabun Bold.ttf",
      fontWeight: 700,
    },
    {
      src: "fonts/THSarabun Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: "fonts/THSarabun Bold Italic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontSize: "14pt",
    fontFamily: "TH SarabunPSK",
    lineHeight: 1.5,
  },
  // modifiers
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  // page 1
  headingImg: {},
  underline: {
    // textDecoration: "underline",
    borderBottom: "1pt solid black",
    lineHeight: 1.25,
    marginBottom: -5,
  },
  // heading
  headingPage: {
    margin: "10 65",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingESC: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
  },
  dateText: {
    textAlign: "center",
    marginLeft: 100,
  },
  // greet
  greetSection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
  },
  // body
  bodySection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
  },
  bodyText: {
    textIndent: 70,
    textJustify: "inter-word",
    wordSpacing: 2,
  },
  lastBodySection: {
    margin: "0 65",
    display: "flex",
    flexDirection: "column",
  },
  // signature
  signatureSection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signatureText: {
    textAlign: "center",
  },
  presidentSignature: {
    position: "relative",
    marginTop: 50,
    marginLeft: 50,
  },
  footerPurpose: {
    marginLeft: 35,
  },
  deanSignature: {
    position: "relative",
    marginTop: 35,
    marginLeft: -37.5,
  },
  deanBodySection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  horizontalLine: {
    margin: "0 auto",
    width: 450,
    height: 5,
  },
  footerSignatureSection: {
    margin: "35 15 0 15",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

interface MyDocumentProps {
  data: {
    projectId: string;
    documentId: string;
  };
}

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

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src="/assets/header.png" style={styles.headingImg} />

      <View style={styles.headingPage}>
        <Text>
          <Text style={styles["bold"]}>ที่</Text> กวศ.{data.projectId}-
          {data.documentId} / 2566
        </Text>

        <View style={styles.headingESC}>
          <Text>กรรมการนิสิตคณะวิศวกรรมศาสตร์</Text>
          <Text>จุฬาลงกรณ์มหาวิทยาลัย</Text>
        </View>
      </View>
      <Text style={styles.dateText}>วันที่ {data.date}</Text>

      <View style={styles.greetSection}>
        <Text>
          <Text style={styles.bold}>เรื่อง</Text> ขออนุญาตใช้
          {data.itemToRequest}
        </Text>
        <Text>
          <Text style={styles.bold}>เรียน</Text> {data.to}
        </Text>
        <Text>
          <Text style={styles.bold}>สิ่งที่แนบมา</Text> รายละเอียดการใช้
          {data.itemToRequest}
        </Text>
      </View>

      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          ตามที่{data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          ได้รับอนุมัติให้จัดโครงการ
          {data.projectName} เพื่อ
          <Text>{data.projectObjective}</Text>
        </Text>
        <Text style={styles.bodyText}>
          {data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          จึงขออนุญาตใช้ สถานที่และอุปกรณ์เพื่อ
          {data.activity} โดยมีรายละเอียดตามเอกสารแนบ
        </Text>
      </View>
      <View style={styles.lastBodySection}>
        <Text style={styles.bodyText}>จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</Text>
      </View>

      <View style={styles.presidentSignature}>
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>(กันตพงศ์ โหราเรือง)</Text>
          <Text style={styles.signatureText}>หัวหน้านิสิต</Text>
        </View>
      </View>

      <View style={styles.deanBodySection}>
        <Text>
          <Text style={styles.bold}>เรียน</Text> {data.toFooter}
        </Text>
        <Text style={styles.footerPurpose}>- เพื่อโปรดพิจารณาอนุมัติ</Text>

        <View style={styles.deanSignature}>
          <View style={styles.signatureSection}>
            <Text style={styles.signatureText}>
              (รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)
            </Text>
            <Text style={styles.signatureText}>รองคณบดี</Text>
          </View>
        </View>
      </View>

      <Svg style={styles.horizontalLine}>
        <Line x1={0} y1={0} x2={450} y2={0} stroke="#000" strokeWidth="1" />
      </Svg>

      <View style={styles.footerSignatureSection}>
        <Text style={{ width: 85 }} />
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>({data.headOfVenueStudent})</Text>
          <Text style={styles.signatureText}>รองประธานโครงการฝ่ายสถานที่</Text>
        </View>
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>({data.headOfVenueStaff})</Text>
          <Text style={styles.signatureText}>
            หัวหน้างานฝ่ายสถานที่และกายภาพ
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
