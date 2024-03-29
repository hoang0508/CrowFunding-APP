import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { Dropdown } from "dropdown";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { Button } from "components/button";
import useOnChange from "hooks/useOnChange";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import ImageUpload from "components/image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNews = () => {
  // hook form
  const { handleSubmit, control, setValue, reset, watch } = useForm();

  // watch dropdown value
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };

  // state content quil
  const [content, setContent] = useState();

  // react quil upload image
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const reponse = await axios({
            method: "POST",
            url: "https://api.imgbb.com/1/upload?key=3bbc75e201e1e8be18b8aa12249b605d",
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return reponse.data.data.url;
        },
      },
    }),
    []
  );

  // Onchange campaign
  const [filterCountries, setFilterCountries] = useOnChange(500);

  // state countries
  const [countries, setCountries] = useState([]);

  // getData countries
  useEffect(() => {
    if (!filterCountries) return;
    const fetchDataCountries = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountries}`
        );
        setCountries(res?.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchDataCountries();
  }, [filterCountries]);

  // setValue dropdown
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  // date picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // reset values
  const resetValues = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };

  // hanlde submit handleAddNewCampaign
  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`/api/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("Create campaigns successfully");
      resetValues();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl text-[25px] text-text2 font-bold inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label className="text-left" name="title">
                Campaign Title *
              </Label>
              <Input
                name="title"
                control={control}
                placeholder="Write a title"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-left" name="title">
                Select a category *
              </Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel("category", "Select category")}
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() =>
                        handleSelectDropdownOption("category", category)
                      }
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label className="text-left">Short Description *</Label>
            <Textarea
              control={control}
              name="short_description"
              placeholder="Write a short description...."
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label className="text-left" name="story">
              Story *
            </Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Featured image</Label>
              <ImageUpload onChange={setValue} name="feature_image" />
            </FormGroup>
            <FormGroup></FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Goal *</Label>
              <Input
                control={control}
                placeholder="$0.00 USD"
                name="goal"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">Raised Amount *</Label>
              <Input
                control={control}
                placeholder="$0.00 USD"
                name="amount"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Amount Prefilled</Label>
              <Input
                control={control}
                placeholder="Amount Prefilled"
                name="prefilled"
              ></Input>
              <p className="text-sm text-left text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">Video</Label>
              <Input control={control} placeholder="Video" name="video"></Input>
              <p className="text-sm text-left text-text3">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left" name="title">
                Campaign End Method
              </Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label className="text-left" name="title">
                Country
              </Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel("country", "Select country")}
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search country"
                    onChange={(e) => setFilterCountries(e)}
                  ></Dropdown.Search>
                  {countries &&
                    countries.length > 0 &&
                    countries.map((item) => (
                      <Dropdown.Option
                        key={item?.name?.common}
                        onClick={() =>
                          handleSelectDropdownOption(
                            "country",
                            item?.name?.common
                          )
                        }
                      >
                        {item?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Start Date</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-left">End Date</Label>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
          </FormRow>
          <div>
            <Button type="submit" kind="primary" className="mx-auto px-10">
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNews;
