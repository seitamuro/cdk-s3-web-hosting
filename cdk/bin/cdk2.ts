#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { ReactHostingS3 } from "../lib/react-hosting-s3";

const app = new cdk.App();
new ReactHostingS3(app, "CdkFactoryStepfunctionStack", {
  source: "../my-app/",
});
