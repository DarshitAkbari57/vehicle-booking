import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Button, message } from "antd";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCar, FaCalendarAlt, FaMotorcycle } from "react-icons/fa";
import { GetTypeByWheels } from "../redux/vehicleType/action";
import { useDispatch, useSelector } from "react-redux";
import { GetModelsByType } from "../redux/vehicleModels/action";
import { createBooking } from "../redux/booking/action";

const { RangePicker } = DatePicker;

const DynamicVehicleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numberOfVehicles: null,
    vehicleTypeId: null,
    vehicleModelId: null,
    dateRange: null,
  });

  const [vehicleTypes, setVehicleTypes] = useState({
    2: [],
    4: [],
  });
  const type = useSelector((state) => state?.type?.type);
  const model = useSelector((state) => state?.model?.model);

  const steps = [
    {
      label: "What is your name?",
      icon: <FaUser size={24} />,
      content: (
        <>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your first name"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your last name"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </Form.Item>
        </>
      ),
    },
    {
      label: "Number of wheels?",
      icon: <FaMotorcycle size={24} />,
      content: (
        <Form.Item
          name="numberOfVehicles"
          rules={[
            { required: true, message: "Please select the number of wheels!" },
          ]}
        >
          <RadioGroup
            row
            value={formData.numberOfVehicles}
            onChange={(e) =>
              handleInputChange("numberOfVehicles", e.target.value)
            }
          >
            <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
            <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
          </RadioGroup>
        </Form.Item>
      ),
    },
    {
      label: "Type of vehicle",
      icon: <FaCar size={24} />,
      content: (
        <Form.Item
          name="vehicleTypeId"
          rules={[{ required: true, message: "Please select a vehicle type!" }]}
        >
          <RadioGroup
            row
            value={formData.vehicleTypeId}
            onChange={(e) => handleInputChange("vehicleTypeId", e.target.value)}
          >
            {vehicleTypes[formData.numberOfVehicles]?.map((type) => (
              <FormControlLabel
                key={type?.id}
                value={type?.id}
                control={<Radio />}
                label={type?.type}
              />
            ))}
          </RadioGroup>
        </Form.Item>
      ),
    },
    {
      label: "Specific Model",
      icon: <FaCar size={24} />,
      content: (
        <Form.Item
          name="vehicleModelId"
          rules={[
            { required: true, message: "Please select a specific model!" },
          ]}
        >
          <RadioGroup
            row
            value={formData.specificModel}
            onChange={(e) =>
              handleInputChange("vehicleModelId", e.target.value)
            }
          >
            {model?.map((e, index) => {
              return (
                <FormControlLabel
                  key={e?.id}
                  value={e?.id}
                  control={<Radio />}
                  label={e?.name}
                />
              );
            })}
          </RadioGroup>
        </Form.Item>
      ),
    },
    {
      label: "Date range picker",
      icon: <FaCalendarAlt size={24} />,
      content: (
        <Form.Item
          name="dateRange"
          rules={[{ required: true, message: "Please select a date range!" }]}
        >
          <RangePicker
            size="large"
            className="w-full"
            onChange={(dates) =>
              handleInputChange(
                "dateRange",
                dates ? dates.map((date) => date.format("YYYY-MM-DD")) : null
              )
            }
          />
        </Form.Item>
      ),
    },
  ];

  // const handleInputChange = (key, value) => {
  //   setFormData({ ...formData, [key]: value });
  // };
  const handleInputChange = (key, value) => {
    console.log("key,value :>> ", key, value);
    setFormData((prevState) => {
      const updatedData = { ...prevState, [key]: value };

      // If the number of wheels is changed, trigger the API call
      if (key === "numberOfVehicles") {
        dispatch(GetTypeByWheels(Number(value))); // Dispatch the API with the selected value
      }

      if (key === "vehicleType") {
        dispatch(GetModelsByType(Number(value))); // Dispatch the API with the selected value
      }

      return updatedData;
    });
  };

  useEffect(() => {
    if (type?.vehicleTypes?.length) {
      // Update the vehicleTypes state based on the API response
      const vehicleData = type?.vehicleTypes?.filter(
        (vehicle) => vehicle?.wheels === 2 || vehicle.wheels === 4
      );
      const newVehicleTypes = {
        2: vehicleData?.filter((vehicle) => vehicle.wheels === 2),
        4: vehicleData?.filter((vehicle) => vehicle.wheels === 4),
      };
      setVehicleTypes(newVehicleTypes);
    }
  }, [type]);

  const handleNext = () => {
    form
      .validateFields()
      .then(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      })
      .catch(() => {
        message.error(
          "Please complete the current question before proceeding!"
        );
      });
  };

  const handleSubmit = async () => {
    form
      .validateFields()
      .then(async () => {
        console.log("Form submitted:", formData);
        const obj = {
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          vehicleTypeId: formData?.vehicleTypeId,
          vehicleModelId: formData?.vehicleModelId,
          startDate: formData?.dateRange?.[0],
          endDate: formData?.dateRange?.[1],
        };
        const response = await dispatch(createBooking(obj));

        form.resetFields();
        setCurrentStep(0);
        if (response?.status === 201) {
          navigate("/booking");
        }
      })
      .catch(() => {
        message.error("Please complete all required fields!");
      });
  };

  useEffect(() => {
    dispatch(GetModelsByType(2));
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <motion.div
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Vehicle Booking Form
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index <= currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-semibold flex items-center mb-4">
            {steps[currentStep].icon}{" "}
            <span className="ml-3">{steps[currentStep].label}</span>
          </h3>
          <Form form={form} layout="vertical">
            {steps[currentStep].content}
          </Form>
        </motion.div>
        <div className="flex justify-center mt-10">
          {currentStep < steps.length - 1 ? (
            <Button className="w-40" type="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button className="w-40" type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicVehicleForm;
