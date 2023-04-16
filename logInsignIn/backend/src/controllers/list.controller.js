import List from "../models/List";
import createPDF from "../libs/pdf-creator";

export const createList = async (req, res) => {
  try {
    const { title, tasks } = req.body;
    const list = new List({
      title,
      tasks,
      user: req.userId,
    });
    list.file = await createPDF(list);
    await list.save();
    res.status(200).json({
      message: "List saved successfully",
      List: list,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const readList = async (req, res) => {
  try {
      const id = req.params.id;
      const list = await List.findById(id);
      res.status(200).json(list);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const getLists = async (req, res) => {
    try {
        const lists = await List.find({user: req.userId});
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
          });
    }
};