import { Router } from "express";
import { genQuiz, genCustom } from "../controllers/api";

const router = Router();

router.get("/subject/:difficulty");

router.get("/:subject", genQuiz);

router.get("/:subject/:limit", genCustom);
// router.get("/accounting");
// router.get("/adobe");
// router.get("/agile");
// router.get("/andorid");
// router.get("/angular");
// router.get("/autocad");
// router.get("/aws");
// router.get("/bash");
// router.get("/c-minus");
// router.get("/c#");
// router.get("c++");
// router.get("/css");
// router.get("/cyberSecurity");
// router.get("/django");
// router.get("/dotnet");
// router.get("/eclipse");
// router.get("frontend");
// router.get("/git");
// router.get("/go");
// router.get("/google");
// router.get("/hadoop");
// router.get("/html");
// router.get("/it");
// router.get("/java");
// router.get("/javascript");
// router.get("/jquery");
// router.get("/json");
// router.get("/kotlin");
// router.get("/lambda");
// router.get("/linux");
// router.get("/machine-learning");
// router.get("/matlab");
// router.get("/microsoft");
// router.get("/mongodb");
// router.get("/mysql");
// router.get("/nodejs");
// router.get("/nosql");
// router.get("/objective-c");
// router.get("/oop");
// router.get("/php");
// router.get("/pyhton");
// router.get("/quick-books");
// router.get("/react");
// router.get("/r");
// router.get("/rest-api");
// router.get("/ruby-on-rails");
// router.get("/rust");
// router.get("/scala");
// router.get("/seo");
// router.get("/sharepoint");
// router.get("/solidworks");
// router.get("/spring-frame");
// router.get("/swift");
// router.get("/t-sql");
// router.get("/unity");
// router.get("vba");
// router.get("visio");
// router.get("windows-server");
// router.get("/wordpress");
// router.get("/xml");

export default router;