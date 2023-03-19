import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-text1 font-semibold text-lg mb-5">Support</h2>
      <div className="bg-white flex flex-col shadow-1 rounded-xl py-5 px-6">
        <h3 className="text-center text-xl mb-8 text-text3">
          Pledge without reward
        </h3>
        <Input
          name="Pledge"
          placeholder="$10"
          control={control}
          className="px-5 py-3 rounded font-medium text-lg w-full border border-strock mb-5"
        ></Input>
        <div className="bg-grayf3 p-5 rounded-xl text-sm mb-5">
          <p className="font-semibold text-text2 mb-5">
            Back it because you believe in it.
          </p>
          <p className="text-text3 font-normal">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="bg-secondary text-white w-full">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
