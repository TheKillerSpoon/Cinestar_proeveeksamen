import {
  addFaq,
  deleteFaq,
  getFaqById,
  updateFaq,
} from "../../handlers/faqs/faq.handler.js";
import express from "express";
import auth from "../../middleware/auth.middleware.js";
import mongoose from "mongoose";

const faqRoute = express.Router();

const isValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    return false;
  }
  return true;
};

// GET FAQ BY ID
faqRoute.get("/faq/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Faq ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await getFaqById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error in GET /faq/:id:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// POST FAQ
faqRoute.post("/faq", auth, async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).send({
        status: "error",
        message:
          "Please provide all required fields, and at least one ingredient and one category",
        data: [],
      });
    }

    const model = {
      question,
      answer,
    };

    const result = await addFaq(model);

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(201).send(result);
  } catch (error) {
    console.error("Error in POST /faq:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT FAQ
faqRoute.put("/faq", auth, async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Faq ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id)) return;

    const model = {
      ...req.body,
    };

    const result = await updateFaq(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating faq:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE FAQ
faqRoute.delete("/faq/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "No ID provided",
        data: {},
      });
    }

    if (!isValidObjectId(id)) return;

    const result = await deleteFaq(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting faq:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default faqRoute;
