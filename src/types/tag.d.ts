export interface ITag {
  _id: Types.ObjectId;
  title: string;
  color: string;
  textColor: string;
  createdBy: { type: mongoose.Types.ObjectId; ref: "User" };
}
